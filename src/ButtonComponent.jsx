const Button = (propsObj) => {
  console.log(propsObj);
  return (
    <button
      style={{
        color: propsObj.textColor,
        borderRadius: propsObj.border,
        marginTop: propsObj.margin,
        backgroundColor: propsObj.bg,
        border: propsObj.borderStyle,
        width: propsObj.w,
        height: propsObj.h,
        fontSize: propsObj.fs,
        display: propsObj.d,
        margin: propsObj.m,
      }}
    >
      {propsObj.text}
    </button>
  );
};
export default Button;
