import React from 'react';
import Visa from '../../components/Image/Visa.png';
import Mastercard from '../../components/Image/MasterCard.png';
import AmericanExpress from '../../components/Image/american-express.png';
import Avatar from '../../components/Image/Avatar2.png';
import List from '../../components/Image/list-details.svg';
import Dot from '../../components/Image/Dot.svg';
import '../../styles/statistics-transaction.css';

const rows = [
    { card: <><img src={Visa}alt="Visa" /> <span>*4230</span> <br /> Credit</>, date: <>Sent <br /> 17 Mar 2022</>, status: 'Verified', trend: '+$1,678' },
    { card: <><img src={Mastercard} alt="Mastercard" /> <span>*5578</span> <br /> Credit</>, date: <>Sent <br /> 12 Feb 2022</>, status: 'Rejected', trend: '-$839' },
    { card: <><img src={AmericanExpress} alt="American Express" /> <span>*4567</span> <br /> ATM</>, date: <>Sent <br /> 28 Feb 2022</>, status: 'Verified', trend: '+$435' },
    { card: <><img src={Visa} alt="Visa" /> <span>*5699</span> <br /> Credit</>, date: <>Sent <br /> 08 Jan 2022</>, status: 'Pending', trend: '+$2,345' },
    { card: <><img src={Visa} alt="Visa" /> <span>*5699</span> <br /> Credit</>, date: <>Sent <br /> 08 Jan 2022</>, status: 'Rejected', trend: '+$2,345' },
  ];
  
  export default function LastTransactionTable() {
    return (
      <div className="last-transaction-container">
        <div className="last-transaction">
          <h3>Last Transaction</h3>
          <table>
            <thead>
              <tr>
                <th>Card</th>
                <th>Date</th>
                <th>Status</th>
                <th>Trend</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index}>
                  <td>{row.card}</td>
                  <td>{row.date}</td>
                  <td>{row.status}</td>
                  <td>{row.trend}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="activity-timeline">
          <div className="header-container">
            <img src={List} alt='List icon' />
            <h3>Activity Timeline</h3>
          </div>
          <div className="activity-container">
            <img src={Dot} alt='Dot icon' />
            <h4>Client Meeting</h4>
            <span>Project meeting with john @10:15a</span>
            <div>
                <img src={Avatar} alt='Avatar' />
                <h4>Lester McCarthy (Client)</h4>
                <span>CEO of Infibeam</span>
            </div>
          </div>
          <div className="activity-container">
            <img src={Dot} alt='Dot icon' />
            <h4>Create a new project for client</h4>
            <span>Add files to new design folder</span>
          </div>
          <div className="activity-container">
            <img src={Dot} alt='Dot icon' />
            <h4>Shared 2 New Project Files</h4>
            <span>Sent by Mollie Dixon</span>
          </div>
          <div className="activity-container">
            <img src={Dot} alt='Dot icon' />
            <h4>Project status updated</h4>
            <span>Project status updated</span>
          </div>
        </div>
      </div>
    );
  }
