document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById('resumeHeadlineTxt');
    if (!textarea) return;

    const newHeadline = ' ff Senior Software Engineer | Angular, TypeScript, RxJS, NgRx | 10+ yrs experience';
    textarea.value = newHeadline;
});