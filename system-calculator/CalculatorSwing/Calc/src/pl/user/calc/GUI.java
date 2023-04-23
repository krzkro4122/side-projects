import javax.swing.*;
import java.awt.*;
// import java.util.regex.Pattern;

public class GUI {

    public static JFrame jf = new JFrame("Calculator");
    public static JTextField jTextField = new JTextField();
    public static String lastValue = "0";
    public static String lastOperation = "no";
    public static String operValue = "0";
    public static boolean operation = false;
    public static boolean afterEqual = true;

    public static JButton createButton(String name){
        JButton jb = new JButton(name);
        jb.setBackground(new Color(52, 52, 46));
        jb.setFont(new Font("Arial", Font.PLAIN, 42));
        jb.setForeground(Color.white);
        // if(Pattern.compile("^[0-9 | ~ | . | x | \\- | +]").matcher(name).matches()){
        //     jb.setBackground(Color.white);
        //     jb.setForeground(Color.darkGray);
        //     jb.setFont(new Font("Arial", Font.PLAIN, 36));
        // }
        jb.setBorder(BorderFactory.createLineBorder(Color.darkGray));
        jb.setPreferredSize(new Dimension(100, 100));
        jb.addActionListener(new CalcEventListener());
        return jb;
    }

    public static JTextField createJTextField(){
        jTextField.setFont(new Font("Arial", Font.PLAIN, 50));
        jTextField.setForeground(Color.black);
        jTextField.setBorder(BorderFactory.createLineBorder(Color.darkGray));
        jTextField.setBackground(Color.lightGray);
        jTextField.setHorizontalAlignment(SwingConstants.RIGHT);
        jTextField.setBorder(BorderFactory.createEmptyBorder(0, 0, 0, 20));
        jTextField.setPreferredSize(new Dimension(100,100));
        jTextField.setEditable(false);
        jTextField.setText("0");
        return jTextField;
    }

    public static void createAndShowGUI() {

        JPanel jPanel = new JPanel(new GridLayout(4,5,0,0));
        createJTextField();

        String[] keyTab = {"1","2","3","+","4","5","6","-","7","8","9","x","C","0","=","/"};
        for(String s : keyTab) jPanel.add(createButton(s));

        jf.getContentPane().add(jTextField,BorderLayout.NORTH);
        jf.getContentPane().add(jPanel);

        jf.pack();
        jf.setVisible(true);
        jf.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
}
