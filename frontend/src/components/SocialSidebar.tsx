function SocialSidebar() {
  const socials = [
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png', // Add this image to your /public/social folder
      link: '#',
      color: 'bg-blue-600',
      name: 'Facebook',
    },
    {
      img: 'https://images.seeklogo.com/logo-png/31/1/twitter-logo-png_seeklogo-318424.png',
      link: '#',
      color: 'bg-sky-400',
      name: 'Twitter',
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/768px-WhatsApp.svg.png?20220228223904',
      link: '#',
      color: 'bg-green-500',
      name: 'WhatsApp',
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png?20140125013055',
      link: '#',
      color: 'bg-blue-700',
      name: 'LinkedIn',
    },
    {
      img: 'https://cdn.pixabay.com/photo/2022/01/11/15/02/pinterest-6930796_1280.png',
      link: '#',
      color: 'bg-red-500',
      name: 'Pinterest',
    },
  ];

  return (
    <div className="fixed top-1/3 left-0 z-50 flex flex-col gap-2">
      {socials.map((social, i) => (
        <a
          key={i}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`${social.color} flex items-center p-2 rounded-r-lg transform transition-all duration-300 hover:translate-x-2 hover:shadow-lg`}
        >
          <img src={social.img} alt={social.name} className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
}

export default SocialSidebar;
