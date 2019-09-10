import React from 'react';

export default function DeleteWord(props) {
    return (
        <td>
            <button
                className="btn btn-outline-danger btn-sm"
                data-toggle="modal"
                data-target="#delete-word-modal"
                type="button"
            >
                <i className="fa fa-times"></i>
            </button>
            <div className="modal fade" id="delete-word-modal" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <p className="font-weight-bold">
                                Are you sure you want to delete this word
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-outline-primary btn-block"
                                data-dismiss="modal"
                            >
                                No
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger w-25"
                                data-dismiss="modal"
                                onClick={() => props.delete(props.word_id)}
                            >
                                Yes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </td>
    );
}
