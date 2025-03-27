export class BaseElements {
    // Selectors specific to the login page
    static loginButton = `//button[@type='submit' and normalize-space()='Login']`;

    //Input custom xpath
    static inputWithAttribute(attribute: string, attributeValue: string): string {
        return `//input[@${attribute}='${attributeValue}']`;
      }

    //Button custom xpath
    static buttonWithAttribute(attribute: string, attributeValue: string): string {
        return `//button[@${attribute}='${attributeValue}']`;
      }

      static buttonHasText(textValue: string): string {
        return `//button[text()='${textValue}']`;
      }

      static buttonContainsText(textValue: string): string {
        return `//button[contains(text(),'${textValue}')]`;
      }
  }