import javax.swing.*;
import java.awt.*;
import java.util.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import org.apache.logging.log4j.*;

public class LoginFrame extends JFrame implements ActionListener {

    private static final Logger logger = LogManager.getLogger("LoginFrame");

    Container container = getContentPane();
    JPanel containerPanel = new JPanel();    
    JPanel registerPanel = new JPanel();   

    JLabel userLabel = new JLabel("USERNAME", SwingConstants.CENTER);
    JLabel passwordLabel = new JLabel("PASSWORD", SwingConstants.CENTER);
    JTextField userTextField = new JTextField();
    JPasswordField passwordField = new JPasswordField();
    JButton loginButton = new JButton("LOGIN");
    JButton resetButton = new JButton("RESET");
    JButton registerButton = new JButton("REGISTER");
    JCheckBox showPassword = new JCheckBox("Show Password");    
    static Map<String, String> credentialMap;

    // Constructor
    LoginFrame() {        
        init();
        setFonts();
        setColors();
        setLayoutManager();
        addComponentsToContainer();
        addActionEvent();        
        credentialMap = createDataMap();
        logger.log(Level.INFO, "Opened.");    
    }

    public void init(){        
        this.setTitle("Login");
        this.setVisible(true);
        this.setBounds(10, 10, 300, 300);
        this.setPreferredSize(new Dimension(300, 300));  
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        containerPanel.setBorder(BorderFactory.createTitledBorder("Login"));
    }

    public void setFonts(){
        int fontSize = 18;
        userLabel.setFont(new Font("Arial", Font.PLAIN, fontSize));
        userTextField.setFont(new Font("Arial", Font.PLAIN, fontSize));
        passwordLabel.setFont(new Font("Arial", Font.PLAIN, fontSize));        
        passwordField.setFont(new Font("Arial", Font.PLAIN, fontSize));
        showPassword.setFont(new Font("Arial", Font.PLAIN, 14)); 
        loginButton.setFont(new Font("Arial", Font.PLAIN, fontSize));
        resetButton.setFont(new Font("Arial", Font.PLAIN, fontSize));
        registerButton.setFont(new Font("Arial", Font.PLAIN, fontSize));
    }

    public void setColors() {
        // Button Colors
        Color buttonTextColor = Color.white;
        loginButton.setForeground(buttonTextColor);
        resetButton.setForeground(buttonTextColor);
        registerButton.setForeground(buttonTextColor);
        Color buttonColor = Color.darkGray;
        loginButton.setBackground(buttonColor);        
        resetButton.setBackground(buttonColor);
        registerButton.setBackground(buttonColor);
    }

    public void setLayoutManager() {
        container.setLayout(new BoxLayout(container, BoxLayout.PAGE_AXIS));
        containerPanel.setLayout(new GridLayout(6, 2));
    }

    public void addComponentsToContainer() {

        containerPanel.add(new Label()); // 👻
        containerPanel.add(new Label()); // 👻
        containerPanel.add(userLabel);
        containerPanel.add(userTextField);
        containerPanel.add(passwordLabel);        
        containerPanel.add(passwordField);
        containerPanel.add(new Label()); // 👻
        containerPanel.add(showPassword);
        containerPanel.add(new Label()); // 👻
        containerPanel.add(new Label()); // 👻
        containerPanel.add(loginButton);
        containerPanel.add(resetButton);

        registerPanel.add(registerButton);
         
        container.add(containerPanel);
        container.add(registerPanel);
    }

    public void addActionEvent() {
        loginButton.addActionListener(this);
        resetButton.addActionListener(this);
        showPassword.addActionListener(this);
        passwordField.addActionListener(this);
        registerButton.addActionListener(this);
    }

    // Retrieve usernames with respective passwords and store them in a map
    public Map<String, String> createDataMap(){
        Map<String, String> credentialMap = new HashMap<String, String>();   
        
        // Get users info from database and create a hashmap of PESEL and Password
        ArrayList<User> users = UserDAO.getAll();
        for (User user : users)
            credentialMap.put(user.GetPesel(), user.GetPassword());
        
        return credentialMap;
    }

    public boolean checkCredentials(String username, String password){
        credentialMap = createDataMap();
        // Check whether username already exists
        if(credentialMap.containsKey(username)){
            // Check whether password mathes the given username
            if(credentialMap.get(username).equals(password)) {
                logger.log(Level.INFO, "Credendtials OK.");    
                return true;
            }
        }        
        logger.log(Level.INFO, "Credendtials INVALID.");    
        return false;
    }

    public static void createTicketReservationFrame(String username){
        new TicketReservationFrame(username).pack();
    }

    @Override
    public void actionPerformed(ActionEvent e) {

        // Button "Login" or enter key press
        if (e.getSource() == loginButton || e.getSource() == passwordField) {
            logger.log(Level.INFO, "Login button pressed.");    
            String userText;
            String pwdText;

            userText = userTextField.getText();
            pwdText = String.valueOf(passwordField.getPassword());

            if (checkCredentials(userText, pwdText)) {
                // Open the Ticket Reservation Window    
                createTicketReservationFrame(userText);
                // And close the Login window
                this.setVisible(false);
            }
            else {
                JOptionPane.showMessageDialog(this, "Invalid Username or Password");            
                passwordField.requestFocus();
                passwordField.selectAll();
            }
        }
        // Button "Reset"
        if (e.getSource() == resetButton) {
            logger.log(Level.INFO, "Reset button pressed.");    
            userTextField.setText("");
            passwordField.setText("");
        }
        // RadioButton "Show Password"
        if (e.getSource() == showPassword) {
            logger.log(Level.INFO, "ShowPassword radio button pressed.");    
            if (showPassword.isSelected()) passwordField.setEchoChar((char) 0);
            else {
                passwordField.setEchoChar('*');
                passwordField.requestFocus();                
            }
        }
         // Button "Register"
         if (e.getSource() == registerButton) {
            logger.log(Level.INFO, "Register button pressed.");    
            new UserAddPopup();
        }
    }
}