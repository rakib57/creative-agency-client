import React, { useState } from 'react';

const ServiceTable = ({ singleOrder }) => {
  
    return (
        <tbody >
            <tr>
                <th scope="row"> {singleOrder.name} </th>
                <th > {singleOrder.email} </th>
                <th> {singleOrder.service} </th>
                <th> {singleOrder.details} </th>
             
                <th className='text-success' style={{ fontSize: ".8rem" }}> {singleOrder.stutas} </th>

            

            </tr>
        </tbody>
    );
};

export default ServiceTable;