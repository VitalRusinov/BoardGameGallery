import "./Header.scss"

export const Header = () => {
  return (
    <header className="flex">
      <div className="label">
        <a className='label_anchor flex' href="#">
          <img className='label_img' src="/other_images/logo.png" alt="Logo" />
          <div className="label_name">
            <p>Клуб</p>
            <p>Настольных игр</p>
            <p className="label_name_main">ИГРОТОЧКА</p>
          </div>
        </a>
      </div>
      <div className="schedule flex">
        Расписание
      </div>
    </header>
  )
}