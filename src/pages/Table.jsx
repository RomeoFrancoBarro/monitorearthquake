import React from 'react';
import { ref, onValue } from "firebase/database";
import StartFirebase from '../firebase';

import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const db = StartFirebase();





export class Table extends React.Component{

    constructor(){
        super();
        this.state = {
            tableData: []
            
        }
        
    }

    componentDidMount(){
        const dbRef = ref(db, 'Earthquake')

        onValue(dbRef, (snapshot)=>{
            let records = [];
            snapshot.forEach(childSnapshot=>{
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                records.push({"key": keyName, "data":data})
            })
            this.setState({tableData: records});
        })

    }

    handleLogout = async () => {
        const user = JSON.parse(localStorage.getItem('user'));
        //const navigate = useNavigate();
        const { history } = this.props;
    
        try {
          await signOut(auth);
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          //navigate('/login');
          history.push('/login');
        } catch (error) {
          console.error(error);
        }
      };





    render()
    {
        const user = JSON.parse(localStorage.getItem('user'));
        
        return(
            <div>
                <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
              </a>
              <h1 className="text-white">
                Welcome to React Firebase Auth using email and password {user && user.email}
              </h1>
  
              <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={this.handleLogout}
                >
                  Logout
                </button>
              </div>
  
              <div
                className="items-center justify-between  w-full md:flex md:w-auto md:order-1"
                id="navbar-cta"
              >
                <ul className="flex flex-row font-medium justify-around p-2 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                    <Link
                      to="/"
                      className="flexbox py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-blue-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/tracker"
                      className="flexbox py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-blue-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Tracker
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>




    <div className='flex mt-10 justify-center h-screen'>


        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
        
                        <th scope="col" className="px-6 py-3">
                        #
                        </th>
                        <th scope="col" className="px-6 py-3">
                        Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                        Time
                        </th>
                        <th scope="col" className="px-6 py-3">
                        Magnitude
                        </th>
        
                    </tr>
                </thead>
                <tbody>
                    {this.state.tableData.map((row, index)=>{
                        return(
                        
                        
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={index}>
                        
                            <td className="px-6 py-4">{index+1}</td>
                                <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                {row.data.date}
                                </th>
                            <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {row.data.time}</th>
                            <th className="px-6 py-4">{row.data.magnitude}</th>
                        
                    
                        </tr>
                        )
                    })}
      
                </tbody>
            </table>
            
        </div>
    </div></div>
        )

    }
}

export default Table;
