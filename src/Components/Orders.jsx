import React from 'react'

export default function Orders() {
  return (
    <div className='p-0 m-0 w-[700px] h-[450px] bg-[#171F2F] rounded-[15px] '>
        <div className='ml-5 mt-6 text-left w-full h-[100px] '>
            <h2 className='text-white text-[25px] font-mono'>Recent Orders</h2>
            <hr className="border-t border-gray-500 w-[90%] mt-2"/>
        </div>
        <div className="overflow-x-auto px-5">
  <table className="min-w-full text-sm text-left text-white font-mono">
    <thead className="border-b border-white/20">
      <tr>
        <th scope="col" className="px-4 py-2">Order #</th>
        <th scope="col" className="px-4 py-2">Customer</th>
        <th scope="col" className="px-4 py-2">Date</th>
        <th scope="col" className="px-4 py-2">Amount</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b border-white/10 hover:bg-white/5">
        <td className="px-4 py-2">#1234</td>
        <td className="px-4 py-2">John Doe</td>
        <td className="px-4 py-2">Aug 6, 2025</td>
        <td className="px-4 py-2">$250.00</td>
      </tr>
      <tr className="border-b border-white/10 hover:bg-white/5">
        <td className="px-4 py-2">#1235</td>
        <td className="px-4 py-2">Jane Smith</td>
        <td className="px-4 py-2">Aug 5, 2025</td>
        <td className="px-4 py-2">$180.50</td>
      </tr>
         <tr className="border-b border-white/10 hover:bg-white/5">
        <td className="px-4 py-2">#1235</td>
        <td className="px-4 py-2">Jane Smith</td>
        <td className="px-4 py-2">Aug 5, 2025</td>
        <td className="px-4 py-2">$180.50</td>
      </tr>
         <tr className="border-b border-white/10 hover:bg-white/5">
        <td className="px-4 py-2">#1235</td>
        <td className="px-4 py-2">Jane Smith</td>
        <td className="px-4 py-2">Aug 5, 2025</td>
        <td className="px-4 py-2">$180.50</td>
      </tr>
         <tr className="border-b border-white/10 hover:bg-white/5">
        <td className="px-4 py-2">#1235</td>
        <td className="px-4 py-2">Jane Smith</td>
        <td className="px-4 py-2">Aug 5, 2025</td>
        <td className="px-4 py-2">$180.50</td>
      </tr>

    
    </tbody>
  </table>
</div>

    </div>
  )
}
