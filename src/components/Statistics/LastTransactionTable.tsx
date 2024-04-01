import Visa from "@assets/images/Visa.png";
import Mastercard from "@assets/images/MasterCard.png";
import AmericanExpress from "@assets/images/american-express.png";
import Avatar from "@assets/images/Avatar2.png";
import List from "@assets/images/list-details.svg";
import { DotIcon } from "@icons";
import "@styles/statistics-transaction.scss";

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
        <div className="menu-icon">&#8942;</div>
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
            <td className={`status-${row.status.toLowerCase()}`}>{row.status}</td>
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
        <div className="menu-icon">&#8942;</div>
        <div className="activity-container">
          <div className="dot-container">
            <DotIcon/>
            <h4>Client Meeting</h4>
            <span>Today</span>
          </div>
          <span>Project meeting with john @10:15a</span>
          <div className="container-avatar">
            <img src={Avatar} alt='Avatar' />
            <h4>Lester McCarthy (Client)</h4>
            <span className="subtitle-ceo">CEO of Infibeam</span>
          </div>
        </div>
        <div className="activity-container">
          <div className="dot-container">
            <DotIcon/>
            <h4>Create a new project for client</h4>
            <span>2 Day ago</span>
          </div>
          <span>Add files to new design folder</span>
        </div>
        <div className="activity-container">
          <div className="dot-container">
            <DotIcon/>
            <h4>Shared 2 New Project Files</h4>
            <span>6 Day ago</span>
          </div>
          <span>Sent by Mollie Dixon</span>
          {/*
          <div className="activity-footer">
            <img src={file} alt='File'/>
            <span>App Guideliness</span>
            <img src={table} alt='File'/>
            <span>Testing Results</span>
          </div>
          */}
        </div>
        <div className="activity-container">
          <div className="dot-container">
            <DotIcon/>
            <h4>Project status updated</h4>
            <span>10 Day ago</span>
          </div>
          <span>Project status updated</span>
        </div>
      </div>
    </div>
  );
}
