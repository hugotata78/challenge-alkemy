import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteRecordAction } from '../redux/actions/recordsActions';
import { FormEditRecord } from './FormEditRecord';
import { PanelRecords } from './PanelRecords';


export const ContainerPanel = ({ records }) => {

    const [record, setRecord] = useState({})
    const dispatch = useDispatch()
    const session = useSelector(state=>state.userReducer.session)
    const navigate = useNavigate()

    const handleClick = (e,data)=>{
        setRecord(data)
    }

    const deleteRecord = (id)=>{
        const { token } = session
        dispatch(deleteRecordAction(id,token))
        window.location.reload()
    }
    return (
        <div>
            <FormEditRecord record={record}/>
            <PanelRecords records={records} handleClick={handleClick} deleteRecord={deleteRecord}/>
        </div>
    );
};
