import { Navigate, Outlet } from "react-router-dom";
import { getFromLocalStorage } from "../../localStorageComp/LocalStorageComp";


const ElBosqueRoutesComp = () => {

  const accessLogin = getFromLocalStorage('accessLogin');

  console.log('accessLogin en UserRoutesComp: ',accessLogin)

  if ( accessLogin?.user?.active && (accessLogin?.user?.role === 'elbosque' || accessLogin?.user?.role === 'admin') ) {
    console.log('dentro del if')
    return <Outlet/>;
  }
  console.log('fuera del if')
  return <Navigate to='/login' />
};

export default ElBosqueRoutesComp