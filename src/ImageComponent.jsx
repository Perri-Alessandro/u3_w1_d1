const Img = (imgObj) => {
  console.log(imgObj);
  return <img src={imgObj.src} alt={imgObj.alt} />;
};
export default Img;
