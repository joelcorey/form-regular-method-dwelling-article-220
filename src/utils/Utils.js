export default class Utils {

  static squareFootage = (width, height) => {
    return width * height ;
  }

  static percentOf = (percent, of) => {
    // return percent / of * 100;
    // avoid floating point issue by doing it this way:
    return percent / 100 * of;
  }

  static watts = (volt, amp) => {
    return volt * amp;
  }
}