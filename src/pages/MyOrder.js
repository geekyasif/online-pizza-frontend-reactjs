import React, { useState } from 'react'

function MyOrder() {
    const [orderLength, setOrderLength] = useState(1)
    return (
        <div className='bg-gray-100 h-screen'>
            <div className="container mx-auto">
                <h6 className='text-2xl font-semibold pt-10 mb-4'>All orders</h6>
                <div className="bg-white">
                    <table className="table-auto w-full">
                        <thead>
                            <tr>
                                <th className='p-3 w-3/4 text-start'>Orders</th>
                                <th className='p-3 text-start'>Address</th>
                                <th className='p-3 text-start'>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orderLength == 0
                                    ? <p className='p-3 text-lg'>No orders found !</p>
                                    :
                                    <>
                                        <tr>
                                            <td className='border border-slate-300 p-3'>63a2b393862f4e613c06e306</td>
                                            <td className='border border-slate-300 p-3'>Main Street</td>
                                            <td className='border border-slate-300 p-3'>03:50 PM</td>
                                        </tr>

                                        <tr>
                                            <td className='border border-slate-300 p-3'>63a2b393862f4e613c06e306</td>
                                            <td className='border border-slate-300 p-3'>Main Street</td>
                                            <td className='border border-slate-300 p-3'>03:50 PM</td>
                                        </tr>

                                        <tr>
                                            <td className='border border-slate-300 p-3'>63a2b393862f4e613c06e306</td>
                                            <td className='border border-slate-300 p-3'>Main Street</td>
                                            <td className='border border-slate-300 p-3'>03:50 PM</td>
                                        </tr>

                                    </>

                            }




                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default MyOrder