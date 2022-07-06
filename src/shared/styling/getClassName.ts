const getClassName = (shouldAddClassname: boolean[], classNames: string[]): string => {
  if (shouldAddClassname.length !== classNames.length) {
    throw new Error("[getClassName] There should be an equal number of classNames and conditions.");
  }

  return classNames.reduce((prev, curr, idx) => (shouldAddClassname[idx] ? prev + " " + curr : prev), "");
};

export default getClassName;
