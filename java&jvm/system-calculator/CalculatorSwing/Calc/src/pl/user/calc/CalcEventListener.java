import java.awt.event.ActionEvent;
import java.util.regex.Pattern;

public class CalcEventListener implements java.awt.event.ActionListener {
    public static int checkIfOk = 0;
    public static int equals = 0;

    @Override
    public void actionPerformed(ActionEvent actionEvent) {

        String actionValue = actionEvent.getActionCommand();


        Pattern pattern = Pattern.compile("[0-9]");
        String currentValue = GUI.jTextField.getText();
        //if doesn't work well, just delete
        if(GUI.lastOperation.matches("=") && pattern.matcher(actionValue).matches()){
            clear();
        }
            if(currentValue.matches("NAN")){
                if(actionValue.matches("C")){
                    clear();
                }else if( pattern.matcher(actionValue).matches()){
                    clear();
                    GUI.jTextField.setText(actionValue);
                    GUI.operation = false;
                }
            }else if(actionValue.matches("C")){
                clear();
            }else {
                if ( pattern.matcher(actionValue).matches() ) {
                    checkIfOk = 0;
                    if(equals != 0) clear();
                    if ( GUI.operation == true ) {
                        GUI.jTextField.setText(actionValue);
                        GUI.operation = false;
                    } else {
                        if ( GUI.jTextField.getText().matches("0") ) {
                            GUI.jTextField.setText(actionValue);
                        } else {
                            GUI.jTextField.setText(currentValue + actionValue);
                        }
                    }
                }else if(actionValue.matches("[.]")){
                    checkIfOk = 0;
                    Pattern patternDot = Pattern.compile("\\d+");
                    if(patternDot.matcher(currentValue).matches()){
                        GUI.jTextField.setText(currentValue + actionValue);
                    }
                }else if(actionValue.matches("~")){
                    if(Double.parseDouble(GUI.lastValue) == Double.parseDouble(currentValue)){
                        GUI.lastValue = String.valueOf(0 - Double.parseDouble(currentValue));
                        CalcValue.displayValue(0 - Double.parseDouble(currentValue));
                    }else if(checkIfOk==0){
                        CalcValue.displayValue(0 - Double.parseDouble(currentValue));
                    }else {
                        GUI.lastValue = String.valueOf(0 - Double.parseDouble(currentValue));
                        CalcValue.displayValue(0 - Double.parseDouble(currentValue));
                    }
                }else if(actionValue.matches("DEL")){
                    if(currentValue.length()>1) {
                        GUI.jTextField.setText(currentValue.substring(0,currentValue.length()-1));
                        if(checkIfOk!=0){
                            GUI.lastValue = currentValue.substring(0,currentValue.length()-1);
                        }
                    }else if(currentValue.length()==1){
                        GUI.jTextField.setText("0");
                        if(checkIfOk!=0){
                            GUI.lastValue = "0";
                        }
                    }
                }else{
                    if(GUI.lastOperation.matches("no")){
                        GUI.lastValue = currentValue;
                        GUI.lastOperation = actionValue;
                        GUI.operation = true;
                        GUI.operValue = currentValue;
                        checkIfOk=1;
                    }else if(actionValue.matches("=")){
                        if(equals == 0){
                            GUI.operValue = currentValue;
                            checkIfOk++;
                        }
                        equals++;
                        switch (GUI.lastOperation){
                            case "+":
                                CalcValue.addValues(GUI.operValue);
                                break;
                            case "-":
                                CalcValue.subtractValues(GUI.operValue);
                                break;
                            case "x":
                                CalcValue.multiplyValues(GUI.operValue);
                                break;
                            case "/":
                                CalcValue.divideValues(GUI.operValue);
                                break;
                            case "%":
                                CalcValue.moduloValues(GUI.operValue);
                                break;
                        }
                    }else{
                        if(equals!=0){
                            equals = 0;
                            GUI.lastOperation = actionValue;
                            checkIfOk = 1;
                        }else{
                            if(checkIfOk == 0){
                                switch (GUI.lastOperation){
                                    case "+":
                                        CalcValue.addValues(currentValue);
                                        break;
                                    case "-":
                                        CalcValue.subtractValues(currentValue);
                                        break;
                                    case "x":
                                        CalcValue.multiplyValues(currentValue);
                                        break;
                                    case "/":
                                        CalcValue.divideValues(currentValue);
                                        break;
                                    case "%":
                                        CalcValue.moduloValues(currentValue);
                                        break;
                                }
                                GUI.lastOperation = actionValue;
                                GUI.operValue = currentValue;
                                checkIfOk++;
                                equals = 0;
                            }else{
                                GUI.lastOperation = actionValue;
                            }
                        }
                    }


            }
        }

    }
    public static void clear(){
        checkIfOk = 0;
        GUI.jTextField.setText("0");
        GUI.lastValue = "0";
        GUI.lastOperation = "no";
        GUI.operation = false;
        equals = 0;
    }
}
