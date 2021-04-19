export type TextAreaProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

function TextArea({ ...rest }: TextAreaProps) {
  return (
    <textarea
      className="text-blueGray-600 flex-1 p-2 m-1 bg-blueGray-100 rounded-md focus:border-blue-300 border-2"
      {...rest}
    />
  );
}

export default TextArea;
