import "./Header.scss"

export const Header = () => {
  return (
    <header className="flex">
      <div className="label">
        <a className='label_anchor flex' href="#">
          <img className='label_img' src="/other_images/logo.png" alt="Logo" />
          <div className="label_name flex">
            <p className="label_name_main">ИГРОТОЧКА</p>
          </div>
        </a>
      </div>
      <div className="gallery flex">
        Список игр
      </div>
    </header>
  )
}