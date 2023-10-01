package moornmo.domain;

import java.util.Date;
import java.util.List;
import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.BeanUtils;

//<<< DDD / Value Object
@Embeddable
@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderItem {

    @Embedded
    @GeneratedValue(strategy = GenerationType.AUTO)
    private ProductId productId;

    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long qty;
}
//>>> DDD / Value Object