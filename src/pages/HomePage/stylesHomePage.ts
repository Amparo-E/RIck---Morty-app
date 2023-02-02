import image from '../../assets/cMIO9o.webp'

export const style = {
  landing_box: {
    height: "100vh",
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: "bottom",
    display: 'flex',
    justifyContent: "start",
    alignItems: "center",
  },
  info_box: {
    width: '500px',
    margin: '10px',
    color: '#fff',
  },
  handle_panel: {
    minHeight: "100vh",
    background: '#252525'
  },
  handle_episodes_panel: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    pb: '30px'
  }
};
