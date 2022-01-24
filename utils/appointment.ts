// import SQLite, { openDatabase, ResultSet, SQLError, SQLiteDatabase, Transaction } from 'react-native-sqlite-storage';
// import Appointment from '../models/appointment';

// SQLite.DEBUG(true);
// SQLite.enablePromise(true);

// const getDb = openDatabase(
//   {
//     name: 'appointments',
//     location: 'default',
//   },
//   () => {},
//   error => { console.error(error) }
// );

// const transaction = (db: SQLiteDatabase ): Promise<Transaction> => {
//   return new Promise(function (resolve, reject) {
//     db.transaction((tx: Transaction) => {
//       resolve(tx);
//     },
//     (error) => {
//       console.error(error);
//     },
//     // callback
//     () => {
//       console.info('Transaction succeeded');
//     });
//   });
// };

// const query = (tx: Transaction, query: any): Promise<ResultSet> => {
//   return new Promise(function(resolve, reject) {
//     tx.executeSql (
//       query.sqlite,
//       query.args,
//       (tx: Transaction, res: ResultSet) => {
//         resolve(res);
//         console.log(tx, res);
//       },
//       (tx: Transaction, error: SQLError) => {
//         reject(error);
//         return true;
//       }
//     )
//   });
// };

// export const initAppointments = async () => {
//   const db = getDb();
//   const tx = await transaction(db).catch(error => console.error(error));

//   if (tx) {
//     await query(tx, {
//       sql: "CREATE TABLE IF NOT EXISTS `appointments` (id integer primary key autoincrement, title text, description text, date date, hour string)",
//       args: [],
//     });
//   }
// };

// export const appointments = {
//   // Create (post)
//   create: (a: Appointment): Promise<ResultSet> => {
//     return new Promise(async function(resolve, reject) {
//       const db = getDb(),
//         tx = await transaction(db);

//       const res = await query(tx, {
//         sql: "INSERT INTO `appointments` (id, title, description, date, hour) VALUES (?, ?, ?, ?, ?)",
//         args: [null, a.title, a.description, a.date, a.hour]
//       }).catch((error) => {
//         reject(error);
//         console.error(error);
//       });

//       if (res) resolve(res);
//     });
//   },

//   // Read (get)
// }