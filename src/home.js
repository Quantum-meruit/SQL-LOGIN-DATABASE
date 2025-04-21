import  react from 'react'
function Home() {
    return (
        <div className='d- flex justify-content-center align-items-centre bg-dark'>
            <div className='bg- white rounded w-50'>
                <h2> MY CRUD APP</h2>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th><Action/th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>


        </div>
    )
}

