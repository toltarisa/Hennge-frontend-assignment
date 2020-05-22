import React from 'react'
import {} from '../components';
import '../styles/components/detail.scss';
import {useHistory} from 'react-router-dom';
export default function Detail(props) {
    const { state } = props.location;
    const route = useHistory();
    return (
        <div className="detail-wrapper">
            <div className="container">
            <div className="template-wrapper">
                <div className="mail-details">
                  <div className="mail-top">
                      <div className="go-back">
                          <button onClick={() => route.goBack()} className="back">
                              Go Back
                          </button>
                      </div>
                    <div className="from">
                        <p className="bold">{state.from}</p>
                        <p>{state.to}</p>
                    </div>
                    <div className="date">
                            {state.date}
                    </div>
                  </div>
                <div className="mail-body">
                    <p>{state.subject}</p>
                </div>
                <div className="mail-footer">

                </div>
                </div>
            </div>
            </div>
        </div>
    )
}
