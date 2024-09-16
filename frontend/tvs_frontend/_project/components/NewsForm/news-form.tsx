import { InputText, TextArea } from "_31pr-bootstrap/src/components/ui/form";
import { FieldWrapper } from "_31pr-bootstrap/src/components/ui/form/field-wrapper";
import { SubmitButton } from "_31pr-bootstrap/src/components/ui/form/submit-button";
import useSubmitForm from "_31pr-bootstrap/src/hooks/useSubmitForm";
import usePostNews from "_project/hooks/usePostNews";

const NewsForm = () => {
  const { postNews, isPosting, hasPostError, postErrorMessage } = usePostNews();

  // Pass the specific API function and related state to useSubmitForm
  const { handleSubmit } = useSubmitForm(
    postNews, // API function
    isPosting,
    hasPostError,
    postErrorMessage
  );

  return (
    <form onSubmit={handleSubmit}>
      <h3>Form</h3>
        <FieldWrapper>
          <InputText
            id={"title"}
            name={"news_title"}
            labelText={"Input Title"}
            placeholder={"Input Title Here"}
            isRequired={true}
          />
          <TextArea
            id={"textarea"}
            name={"news_body"}
            labelText={"Input Whatever you want"}
            placeholder={"Input Whatever you want"}
            isRequired={true}
          />
          <SubmitButton
            buttonText={"Send"}
          />
        </FieldWrapper>
    </form>
  )
}

export default NewsForm;
