function SectionContacts() {
  return (
    <>
      <section id="contacts" className="vh-100 d-flex align-items-center bg-grey">
        <div className="container mt-5">
          <h2 className="display-2">Contacts</h2>
          <ul className="mt-5">
            <li>
              <a className="d-flex flex-wrap" href="tel:+380954976848">
                <span className="fw-semi me-3">Phone:</span>
                +380 (95) 49 76 848
              </a>
            </li>
            <li>
              <a className="d-flex flex-wrap" href="https://t.me/adwasarik">
                <span className="fw-semi me-3">Telegram:</span>@adwasarik
              </a>
            </li>
            <li>
              <a className="d-flex flex-wrap" href="mailto:adwasarik@gmail.com">
                <span className="fw-semi me-3">E-mail:</span>
                adwasarik@gmail.com
              </a>
            </li>
            <li>
              <a className="d-flex flex-wrap" href="https://github.com/Adwasar">
                <span className="fw-semi me-3">GitHub:</span>
                github.com/Adwasar
              </a>
            </li>
            <li>
              <a className="d-flex flex-wrap" href="https://linkedin.com/in/adwasar">
                <span className="fw-semi me-3">Linkedin:</span>
                <span>linkedin.com/in/adwasar</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default SectionContacts;
