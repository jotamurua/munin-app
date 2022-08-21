// import React, { useEffect, useState } from 'react'

// const Suggestions = () => {

//     const [suggestions, setSuggestions] = useState([]);

//     useEffect(() => {
//         const suggestions = [...Array(5)].map((_, i) => (
//             {

//             }
//         ));
//         setSuggestions(suggestions)
//     }, [])
//     return (
//         <div className='mt-4 ml-10'>

//             <h3 className='text-sm font-bold text-gray-400'>
//                 Users in MUNIN
//             </h3>
//         {
//             suggestions.map(profile => (
//                 <div className='flex items-center justify-between mt-3'> 
//                     <img src={profile.avatar} className="w-10 h-10 rounded-full border p-[2px]" alt=""/>
//                     <div className='flex-1 ml-4'>
//                        <h2 className="font-semibold text-sm">
//                         {profile.username}
//                        </h2>
//                     </div>
//                 </div>
//             ))
//         }

//         </div>
//     )
// }

// export default Suggestions