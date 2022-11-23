import { NavLink } from 'react-router-dom'
import { createReactNavLink } from '@milon27/react-sidebar'
import { BsGrid, BsPeople, BsUiRadios, BsPersonPlus, BsBagDash, BsBagX, BsWallet2, BsEggFried, BsEgg, BsBarChart, BsPersonDash, BsBook, BsXCircle, BsTrash, BsRecycle, BsArrowLeftRight } from 'react-icons/bs'
import URL from '../../utils/constant/URL'

const NavItems: (() => JSX.Element)[] = [
    createReactNavLink(NavLink, "Home", URL.HOME, <BsGrid />),
]

export default NavItems