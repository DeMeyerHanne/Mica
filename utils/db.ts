import { enablePromise, openDatabase, ResultSet, SQLiteDatabase  } from "react-native-sqlite-storage";
import Appointment from "../models/appointment";

const tableName = 'appointments'

// #1 Using a promise-based API in the lib, so:
enablePromise(true);

// #2 Add db connection
export const getDBConnection = async () => {
  return openDatabase({ name: 'mica.db', location: 'default' });
};

// #3 If table does not exist, create one
export const createTable = async ( db: SQLiteDatabase ) => {
  const query = `CREATE TABLE IF NOT EXISTS ${tableName} (id integer primary key autoincrement, title text, description text, date date, hour string)`
  await db.executeSql(query);
};

// #4 CRUD operations
// export const getAllAppointments = async ( db: SQLiteDatabase ): Promise<Appointment[]> => {
//   try {
//     const appointmentItems: Appointment[] = [];
//     const res = await db.executeSql(`SELECT * FROM ${tableName}`);

//     res.forEach(result => {
//       for (let i = 0; i < result.rows.length; i++) {
//         appointmentItems.push(result.rows.item(i));
//       }
//     });
//     return appointmentItems;

//   } catch (error) {
//     console.error(error);
//     throw Error('Failed to get appointmentItems')
//   }
// };

export const getAppointmentItems = async (db: SQLiteDatabase): Promise<Appointment[]> => {
  try {
    const appointmentItems: Appointment[] = [];
    const results = await db.executeSql(`SELECT rowid as id,value FROM ${tableName}`);
    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        appointmentItems.push(result.rows.item(index))
      }
    });
    return appointmentItems;
  } catch (error) {
    console.error('ERROR: ', error);
    throw Error('Failed to get appointment items.');
  }
};

export const saveAppointmentItems = async (db: SQLiteDatabase, appointmentItems: Appointment[]) => {
  const insertQuery =
    `INSERT OR REPLACE INTO ${tableName}(id, title, date, hour) values` +
    appointmentItems.map(i => `(${i.id}, '${i.title}', '${i.date}', '${i.hour}')`).join(',');

  return db.executeSql(insertQuery);
};

export const deleteAppointmentItem = async (db: SQLiteDatabase, id: number) => {
  const deleteQuery = `DELETE from ${tableName} where rowid = ${id}`;
  await db.executeSql(deleteQuery);
};
