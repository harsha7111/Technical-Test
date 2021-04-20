import { FaFilePdf, FaExclamationCircle, FaFileAlt, FaAngleDown } from 'react-icons/fa';
import './Card.scss';
function Card() {

    return (
        <div className="Card">
            <header className="Card-header">
                <p className="CardHeader-title">Cancel / recall payment, GBP 1,000.00</p>
                <p className="CardHeader-details">1234567890123456 (GB), KUIML Business Company</p>
            </header>
            <div className="Card-actions">
                <FaFilePdf className="Card-icons" />
                <div className="seperator"></div>
                <FaFileAlt className="Card-icons" />
                <button className='tertiary'>Reject</button>
                <button className='secondary'>Authorize</button>
            </div>
            <div className='Card-section'>
                <div className="seperator"></div>
                <div className="Card-details">
                    <p className="CardDetails-header">Request reference</p>
                    <p className="CardDetails-detail">SET29383ABCH</p>
                </div>
                <div className="seperator"></div>
                <div className="Card-details">
                    <p className="CardDetails-header">Category</p>
                    <p className="CardDetails-detail">Payment</p>
                </div>
                <div className="seperator"></div>
                <div className="Card-details">
                    <p className="CardDetails-header">Request status</p>
                    <p className="CardDetails-detail">
                        <FaExclamationCircle />
                        <span className="paddingLeft6">Pending authorisation</span>
                    </p>
                </div>
            </div>
            <p className='Card-fulldetails'>
                <a href=" ">Full Details <FaAngleDown /></a>
            </p>
        </div>
    );

}

export default Card;
