import React from 'react'

const Holdings = () => {
  return (
    <>
        <h3 className='title'>Holdings</h3>

        <div className='order-table'>
            <table>
                <tr>
                    <th>Instrument</th>
                    <th>Qty</th>
                    <th>Avg. cost</th>
                    <th>LTP</th>
                    <th>Cur. val</th>
                    <th>P&L</th>
                    <th>Net chg.</th>
                    <th>Day chg.</th>
                </tr>
            </table>
        </div>
    </>
  )
}

export default Holdings
