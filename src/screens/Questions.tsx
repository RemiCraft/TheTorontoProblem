export interface Question
{
    id: number;
    prompt: string;
}
const questions: Question[] = [
  {
    id: 1,
    prompt: "Your Parents Live In Toronto Canada",
  },
  {
    id: 2,
    prompt: "All Your Friends Live In Toronto Canada",
  },
  {
    id: 3,
    prompt: "Everyone Else Only Speaks French",
  },
  {
    id: 4,
    prompt: "All Shoes Are Velcro Shoes",
  },
  {
    id: 5,
    prompt: "Everything Is Grape Flavored",
  },
  {
    id: 6,
    prompt: "The Ocean Is Made Of Milk",
  },
  {
    id: 7,
    prompt: "Orange Juice Is A Lie",
  },
];

export default questions;