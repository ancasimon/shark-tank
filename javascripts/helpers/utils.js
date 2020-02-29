// const printToDom = (divId, textToPrint) => {
//     const selectedDiv = $(`#${divId}`);
//     selectedDiv.html(textToPrint);
// };
// and this becomes:

const printToDom = (divId, textToPrint) => {
    $(`#${divId}`).html(textToPrint);
};

export default { printToDom };