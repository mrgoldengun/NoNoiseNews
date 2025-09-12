const EXPANDABLE_CLASS_NAME = "expandable"
const EXPANDABLE_BUTTON_CLASS_NAME = "expandable-button"

window.onload = initialize()
function initialize()
{
    let expandables = document.getElementsByClassName(EXPANDABLE_CLASS_NAME);
    for (let expandable of expandables)
    {
        expandable.style.display = 'none';
    }

    let expand = (expandableContentId) =>
    {
        let expandableContentElement = document.getElementById(expandableContentId);

        expandableContentElement.style.display = expandableContentElement.style.display === 'none' ? 'block' : 'none';
    }
    let expandableButtons = document.getElementsByClassName(EXPANDABLE_BUTTON_CLASS_NAME);
    for (let expandableButton of expandableButtons)
    {
        const expandableContentId = expandableButton.getAttribute('data-id');
        expandableButton.addEventListener("click", expand.bind(null, expandableContentId))
    }
}