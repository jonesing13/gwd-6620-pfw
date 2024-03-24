function NavItem ({label, link, currentPage}) {
  const classes = `nav ${currentPage === label && "current"}`
  return (
    <a className={classes} href={link}>
      {label}
    </a>
  )
}

export default NavItem