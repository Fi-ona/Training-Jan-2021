export class QuestionBase<T>{
    
    value : T | undefined;
    key : string;
    label : string;
    required : boolean;
    order : number;
    controlType : string;
    type : string;
    class : string;
    validations : {}[];
    options : {key : string, value : string}[];

    constructor(options :{
        value? : T;
        key? : string;
        label? : string;
        required? : boolean;
        order? : number;
        controlTyp? : string;
        type? : string;
        class? : string;
        validations? : {}[];
        options? : {key : string, value : string}[];
    } = {}){
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlTyp || '';
        this.type = options.type || '';
        this.class = options.class || '';
        this.validations = options.validations || [];
        this.options = options.options || [];
    }
}