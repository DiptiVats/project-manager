import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancel }) {
  //using ref for modal component to open or close
  const modal = useRef();

  //to connect the refs to the input components
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  //get the entered value by the user by the current object
  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    //checking the validation to show or hide the Modal component
    if (
      enteredDescription.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    //lifting the states up by passing a function for and get the value as parameters
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-500  my-4 ">
          Invalid Input
        </h2>
        <p className="text-stone-600 0 mb-4">
          Ooops ... look like you forgot to enter a value.
        </p>
        <p className="text-stone-600 0 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950 "
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <Input type="text" ref={title} label="Title" />
        <Input ref={description} label="Description" textarea />
        <Input type="date" ref={dueDate} label="Due Date" />
      </div>
    </>
  );
}
