import { deleteDatabase, enablePromise, openDatabase, ResultSet, SQLiteDatabase } from 'react-native-sqlite-storage';
import Appointment from '../models/appointment';



const tableName = 'AppointmentData';
enablePromise(true);

export const getDBConnection = async () => {
  return openDatabase({ name: 'appoinment-data.db', location: 'default' });
};

// deleteDatabase(
//   {name: 'appoinment-data.db', location: 'default'},  
//   () => { console.log('second db deleted');  },
//   error => {
//       console.log("ERROR: " + error); 
//   }
// );

export const createTable = async (db: SQLiteDatabase) => {
  // create table if not exists
  const query = `CREATE TABLE IF NOT EXISTS ${tableName} (id integer primary key autoincrement, title text, description text, date text, hour text);`;
  await db.executeSql(query);
};

export const getAppointmentItems = async (db: SQLiteDatabase): Promise<Appointment[]> => {
  try {
    const appointmentItems: Appointment[] = [];
    const results = await db.executeSql(`SELECT * FROM ${tableName}`);
    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        appointmentItems.push(result.rows.item(index))
      }
    });
    return appointmentItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get appointmentItems!');
  }
};


export const saveAppointmentItems = async (db: SQLiteDatabase, appointmentItems: Appointment[]) => {
  const insertQuery =
    `INSERT OR REPLACE INTO ${tableName}(id, title, description, date, hour) values` +
    appointmentItems.map(i => `(${i.id}, '${i.title}', '${i.description}', '${i.date}', '${i.hour}')`).join(',');
  return db.executeSql(insertQuery);
};


export const deleteAppointmentItem = async (db: SQLiteDatabase, id: number) => {
  const deleteQuery = `DELETE from ${tableName} where rowid = ${id}`;
  await db.executeSql(deleteQuery);
};

export const deleteTable = async (db: SQLiteDatabase) => {
  const query = `drop table ${tableName}`;

  await db.executeSql(query);
};