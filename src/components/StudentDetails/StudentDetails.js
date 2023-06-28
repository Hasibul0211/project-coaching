import React from 'react';
import './StudentDetails.css'
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


const StudentDetails = () => {



    const deleteBtn = () => {

        Swal.fire({
            width: 400,
            fontSize: '20px',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })

    }













    return (
        <div>
            <section style={{ marginTop: '15px' }}>
                <input type="text/number" placeholder='Write student Id or Name' className='searchBox' />
                <button type='submit' className='searchBoxBtn'>Search</button>
            </section>
            <section className='detailsHeader'>
                <div>
                    Student id
                </div>
                <div>
                    Name
                </div>
                <div>
                    class
                </div>
                <div>
                    Contact
                </div>
                <div>
                    Details
                </div>
                <div>Delete</div>

            </section>
            <section className='detailsBody'>
                <div>
                    231205
                </div>
                <div>
                    Hasibul Hasan
                </div>
                <div>
                    Bsc
                </div>
                <div>
                    01626205938
                </div>
                <div>
                    <button>
                        <Link to="/details" style={{ textDecoration: 'none', color: 'black' }}>View</Link>
                    </button>
                </div>
                <div>
                    <button onClick={deleteBtn}>Delete</button>
                </div>

            </section>
            <section className='detailsBody'>
                <div>
                    231205
                </div>
                <div>
                    Hasibul Hasan
                </div>
                <div>
                    Bsc
                </div>
                <div>
                    01626205938
                </div>
                <div>
                    <button>View</button>
                </div>
                <div>
                    <button onClick={deleteBtn}>Delete</button>
                </div>

            </section>
            <section className='detailsBody'>
                <div>
                    231205
                </div>
                <div>
                    Hasibul Hasan
                </div>
                <div>
                    Bsc
                </div>
                <div>
                    01626205938
                </div>
                <div>
                    <button>View</button>
                </div>
                <div>
                    <button onClick={deleteBtn}>Delete</button>
                </div>

            </section>
            <section className='detailsBody'>
                <div>
                    231205
                </div>
                <div>
                    Hasibul Hasan
                </div>
                <div>
                    Bsc
                </div>
                <div>
                    01626205938
                </div>
                <div>
                    <button>View</button>
                </div>
                <div>
                    <button onClick={deleteBtn}>Delete</button>
                </div>

            </section>
            <section className='detailsBody'>
                <div>
                    231205
                </div>
                <div>
                    Hasibul Hasan
                </div>
                <div>
                    Bsc
                </div>
                <div>
                    01626205938
                </div>
                <div>
                    <button>View</button>
                </div>
                <div>
                    <button onClick={deleteBtn}>Delete</button>
                </div>

            </section>
            <section className='detailsBody'>
                <div>
                    231205
                </div>
                <div>
                    Hasibul Hasan
                </div>
                <div>
                    Bsc
                </div>
                <div>
                    01626205938
                </div>
                <div>
                    <button>View</button>
                </div>
                <div>
                    <button onClick={deleteBtn}>Delete</button>
                </div>

            </section>
            <section className='detailsBody'>
                <div>
                    231205
                </div>
                <div>
                    Hasibul Hasan
                </div>
                <div>
                    Bsc
                </div>
                <div>
                    01626205938
                </div>
                <div>
                    <button>View</button>
                </div>
                <div>
                    <button onClick={deleteBtn}>Delete</button>
                </div>

            </section>
            <section className='detailsBody'>
                <div>
                    231205
                </div>
                <div>
                    Hasibul Hasan
                </div>
                <div>
                    Bsc
                </div>
                <div>
                    01626205938
                </div>
                <div>
                    <button>View</button>
                </div>
                <div>
                    <button onClick={deleteBtn}>Delete</button>
                </div>

            </section>
            <section className='detailsBody'>
                <div>
                    231205
                </div>
                <div>
                    Hasibul Hasan
                </div>
                <div>
                    Bsc
                </div>
                <div>
                    01626205938
                </div>
                <div>
                    <button>View</button>
                </div>
                <div>
                    <button onClick={deleteBtn}>Delete</button>
                </div>

            </section>
            <section className='detailsBody'>
                <div>
                    231205
                </div>
                <div>
                    Hasibul Hasan
                </div>
                <div>
                    Bsc
                </div>
                <div>
                    01626205938
                </div>
                <div>
                    <button>View</button>
                </div>
                <div>
                    <button onClick={deleteBtn}>Delete</button>
                </div>

            </section>
            <section className='detailsBody'>
                <div>
                    231205
                </div>
                <div>
                    Hasibul Hasan
                </div>
                <div>
                    Bsc
                </div>
                <div>
                    01626205938
                </div>
                <div>
                    <button>View</button>
                </div>
                <div>
                    <button onClick={deleteBtn}>Delete</button>
                </div>

            </section>
            <section className='detailsBody'>
                <div>
                    231205
                </div>
                <div>
                    Hasibul Hasan
                </div>
                <div>
                    Bsc
                </div>
                <div>
                    01626205938
                </div>
                <div>
                    <button>View</button>
                </div>
                <div>
                    <button onClick={deleteBtn}>Delete</button>
                </div>

            </section>
            <section className='detailsBody'>
                <div>
                    231205
                </div>
                <div>
                    Hasibul Hasan
                </div>
                <div>
                    Bsc
                </div>
                <div>
                    01626205938
                </div>
                <div>
                    <button>View</button>
                </div>
                <div>
                    <button onClick={deleteBtn}>Delete</button>
                </div>

            </section>
            <section className='detailsBody'>
                <div>
                    231205
                </div>
                <div>
                    Hasibul Hasan
                </div>
                <div>
                    Bsc
                </div>
                <div>
                    01626205938
                </div>
                <div>
                    <button>View</button>
                </div>
                <div>
                    <button onClick={deleteBtn}>Delete</button>
                </div>

            </section>
            <section className='detailsBody'>
                <div>
                    231205
                </div>
                <div>
                    Hasibul Hasan
                </div>
                <div>
                    Bsc
                </div>
                <div>
                    01626205938
                </div>
                <div>
                    <button>View</button>
                </div>
                <div>
                    <button onClick={deleteBtn}>Delete</button>
                </div>

            </section>
            <section className='detailsBody'>
                <div>
                    231205
                </div>
                <div>
                    Hasibul Hasan
                </div>
                <div>
                    Bsc
                </div>
                <div>
                    01626205938
                </div>
                <div>
                    <button>View</button>
                </div>
                <div>
                    <button onClick={deleteBtn}>Delete</button>
                </div>

            </section>
        </div>
    );
};

export default StudentDetails;