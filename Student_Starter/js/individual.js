"use strict";

const individualNoteInput = document.querySelector("#individual-note-input");
const individualNoteSaveButton = document.querySelector("#individual-note-save");
const individualNoteClearButton = document.querySelector("#individual-note-clear");
const individualNoteStatus = document.querySelector("#individual-note-status");
const individualNoteBox = document.querySelector("#individual-note-box");
const individualNoteOutput = document.querySelector("#individual-note-output");

function saveIndividualNote() {
  const noteText = individualNoteInput.value.trim();

  if (noteText === "") {
    individualNoteStatus.textContent = "Please enter some text before saving a note.";
    individualNoteInput.focus();
    return;
  }

  individualNoteOutput.textContent = noteText;
  individualNoteBox.classList.remove("is-hidden");
  individualNoteClearButton.disabled = false;
  individualNoteInput.value = "";
  individualNoteStatus.textContent = "Note saved.";
}

function clearIndividualNote() {
  individualNoteOutput.textContent = "";
  individualNoteBox.classList.add("is-hidden");
  individualNoteInput.value = "";
  individualNoteClearButton.disabled = true;
  individualNoteStatus.textContent = "Note cleared.";
}

if (
  individualNoteInput &&
  individualNoteSaveButton &&
  individualNoteClearButton &&
  individualNoteStatus &&
  individualNoteBox &&
  individualNoteOutput
) {
  individualNoteSaveButton.addEventListener("click", saveIndividualNote);
  individualNoteClearButton.addEventListener("click", clearIndividualNote);
  individualNoteClearButton.disabled = true;
}