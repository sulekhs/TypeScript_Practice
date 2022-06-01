//Required<Type>

//Constructs a type consisting of all properties of Type set to required.
// The opposite of Partial.

interface Props {
  a?: number;
  b?: string;
}
 
const zob: Props = { a: 5 };
 
const zob2: Required<Props> = { a: 5 };
//Erro : Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'.