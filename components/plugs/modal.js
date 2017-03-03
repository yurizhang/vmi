import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
        
      /*
        const { modalName } = this.props;
        const { closeModal } = this.props;
        const { saveBtn } = this.props;
        console.log(closeModal);
        */
    }

  render() {
    
    const { modalName } = this.props;
    const { closeModal } = this.props;
    const { saveBtn } = this.props;

    const {modTitle}= this.props;
    const {modBody}= this.props;

    //console.log(modalName);
    //console.log(closeModal);
    //console.log(saveBtn);
    console.log(modBody);
    
    return (

        <div className="modal fade" id={'myModal'+ modalName} tabIndex="-1" role="dialog"  aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                <h3 className="modal-title">{modTitle}</h3>
            </div>
            <div className="modal-body">
                <p>VMI popup info:</p>
                <p  dangerouslySetInnerHTML={{__html: modBody}}>
                </p>
                
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-default" onClick={closeModal}>Close</button>
                <button type="button" onClick={saveBtn} className="btn btn-primary">Save</button>
            </div>
            </div>
        </div>
        </div>




      
    )
  }
}



