import React, { useEffect } from 'react'
import './UserList.css'
// icons
import { FiUser, FiPhoneCall, FiLock } from 'react-icons/fi'
import { CiMail } from 'react-icons/ci'
import { BsCalendarDate } from 'react-icons/bs'
import { ImLocation2 } from 'react-icons/im'
// Redux Toolkit
import { useDispatch, useSelector } from 'react-redux'
// Fetch Api User
import { fetchUsers } from '../../Redux/reducers/userReducer'
// Change MenuCount Action
import { changeCount } from '../../Redux/reducers/countMenuReducer'

export default function UserList() {

    const users = useSelector(state => state.user.users.results)
    const countMenu = useSelector(state => state.countMenu)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatchingRedux()
    }, [dispatch])

    function dispatchingRedux() {
        dispatch(fetchUsers());
    }
    function activeHandler(index) {
        dispatch(changeCount(index))
    }

    return (
        <>
            <div className="random-user-main-box bg-white">
                <div className="main-box-top">
                    <button className='new-user-btn' onClick={dispatchingRedux}>New User</button>
                    {users && users.map((user, index) => (
                        <img src={user.picture.medium} alt="user img" key={index} />
                    ))}
                </div>
                <div className="user-details-box">
                    {users ? users.map((user, index) => (
                        <div key={index}>
                            {countMenu === 0 && (
                                <>
                                    <p className="detail-title">Hi, My name is</p>
                                    <span className='detail-text'>{user.name.first}</span>
                                </>
                            )}
                            {countMenu === 1 && (
                                <>
                                    <p className="detail-title">My email address is</p>
                                    <span className='detail-text'>{user.email}</span>
                                </>
                            )}
                            {countMenu === 2 && (
                                <>
                                    <p className="detail-title">My birthday is</p>
                                    <span className='detail-text'>{user.dob.date.substring(0, 10)}</span>
                                </>
                            )}
                            {countMenu === 3 && (
                                <>
                                    <p className="detail-title">My address is</p>
                                    <span className='text-secondary detail-text'>{user.location.country} </span>
                                    <span className='detail-text'> {user.location.city}</span>
                                </>
                            )}
                            {countMenu === 4 && (
                                <>
                                    <p className="detail-title">My phone number is</p>
                                    <span className='detail-text'>{user.phone}</span>
                                </>
                            )}
                            {countMenu === 5 && (
                                <>
                                    <p className="detail-title">My password is</p>
                                    <span className='detail-text'>{user.login.password}</span>
                                </>
                            )}
                        </div>
                    )) : (
                        <div className="spinner-grow text-secondary" role="status">
                        </div>
                    )}
                </div>
                <div className="handel-btns mt-5">
                    <ul>
                        <li className={countMenu === 0 ? 'active' : ''} onClick={() => activeHandler(0)}>
                            <FiUser />
                        </li>
                        <li className={countMenu === 1 ? 'active' : ''} onClick={() => activeHandler(1)}>
                            <CiMail />
                        </li>
                        <li className={countMenu === 2 ? 'active' : ''} onClick={() => activeHandler(2)}>
                            <BsCalendarDate />
                        </li>
                        <li className={countMenu === 3 ? 'active' : ''} onClick={() => activeHandler(3)}>
                            <ImLocation2 />
                        </li>
                        <li className={countMenu === 4 ? 'active' : ''} onClick={() => activeHandler(4)}>
                            <FiPhoneCall />
                        </li>
                        <li className={countMenu === 5 ? 'active' : ''} onClick={() => activeHandler(5)}>
                            <FiLock />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
