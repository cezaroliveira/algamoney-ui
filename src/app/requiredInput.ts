// https://stackoverflow.com/questions/35528395/make-directive-input-required

// Map of component name -> list of required properties
const requiredInputs  = new Map<string, string[]>();

/**
 * Mark @Input() as required.
 *
 * Supports inheritance chains for components.
 *
 * Example:
 *
 * import { isRequired, checkRequired } from '../requiredInput';
 *
 *  export class MyComp implements OnInit {
 *
 *    // Chain id paramter we check for from the wallet
 *    @Input()
 *    @isRequired
 *    requiredChainId: number;
 *
 *    ngOnInit(): void {
 *      checkRequired(this);
 *    }
 *  }
 *
 * @param target Object given by the TypeScript decorator
 * @param prop Property name from the TypeScript decorator
 */
export function isRequired(target: any, prop: string): void {
  // Maintain a global table which components require which inputs
  const className = target.constructor.name;
  requiredInputs[className] = requiredInputs[className] || [];
  requiredInputs[className].push(prop);
  console.log(className, prop, requiredInputs[className]);
}

/**
 * Check that all required inputs are filled.
 */
export function checkRequired(component: any): void {

  let className = component.constructor.name;
  let nextParent = Object.getPrototypeOf(component);

  // Walk through the parent class chain
  while (className !== 'Object') {

    for (const prop of (requiredInputs[className] || [])) {
      const val = component[prop];
      if (val === null || val === undefined) {
        console.error(component.constructor.name, prop, 'is required, but was not provided, actual value is', val);
      }
    }

    className = nextParent.constructor.name;
    nextParent = Object.getPrototypeOf(nextParent);
    console.log("Checking", component, className);
  }
}
