import css from "../Styles/Contact.module.css";

const info = {
  address: "7780 Royal Oak, Burnaby, BC, Canada",
  time: [
    {
      day: "M-F",
      hour: "9am-5pm", 
    }
  ],
  contact: {
    email: "amy@gmail.com",
    phone: "111-111-1111",
  },
};

function Contact() {

  const _container = {
    width: "100%",
    padding: "20px 80px",
  };

  return (
    <div className={css.container} >
      <div className={css.inner}>

        <div style={{
          ..._container,
          background: "lightgreen",
        }}>
          <header>
            Time
          </header>
          <ul>
            <li>M-F: 9am - 5pm</li>
            <li>Saturday: 10am - 2pm</li>
            <li>Sunday: closed</li>
          </ul>
        </div>

        <div style={{
          ..._container,
          background: "pink",
        }}>
          <header>
            Location
          </header>
          <Link name={info.address} type="address" to={info.address} />
        </div>

        <div style={{
          ..._container,
          background: "lightblue",
        }}>
          <header>
            Contact Us
          </header>
          <ul>
            <li>Email: <Link name={info.contact.email} type="email" to={info.contact.email} /></li>
            <li>Phone: <Link name={info.contact.phone} type="phone" to={info.contact.phone} /></li>
          </ul>
        </div>

      </div>
    </div>
  )
}

function Link({
  name, type, to
}) {
  switch (type) {
    case "email":
      return (
        <a className={css.link} href={`mailto:${to}`} >{name}</a>
      );

    case "phone":
      return (
        <a className={css.link} href={`tel:${to}`} >{name}</a>
      );

    case "address":
      return (
        <a className={css.link} target="_blank" href={`https://maps.google.com/?q=${to}`} >{name}</a>
      );

    default:
      return (<a className={css.link} href={to} target="_blank" >{to}</a>)
  }
}

export default Contact;