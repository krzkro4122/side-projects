package sia.taco_cloud;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class TacoDesignController {
    @GetMapping("/design")
    public String home() {
        return "design";
    }
}
