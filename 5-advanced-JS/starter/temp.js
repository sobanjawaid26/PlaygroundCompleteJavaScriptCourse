/*
Core Spring Framework Annotations
@Required
applied on bean setter methods
scenario where you need to enforce a required property
indicates that the affected bean must be populated at configuration time with the required property
@Autowired
 applied on fields, setter methods, and constructors
injects object dependency implicitly.
When you use @Autowired on fields and pass the values for the fields using the property name, Spring will automatically assign the fields with the passed values
You can even use @Autowired on private properties
When you use @Autowired on setter methods, Spring tries to perform the by Type autowiring on the method
When you use @Autowired on a constructor, constructor injection happens at the time of object creation
 only one constructor of any bean class can carry the @Autowired annotation
Injecting beans without Annotations:
< bean id="tyre1Bean" class="com.techgene.Tyres"> 
    <property name="name" value="MRF"> 
    </ property> 
  
    <property name="place" value="India"> 
    </ property> 
  
    <property name="message" value="Make in India"> 
    </ property> 
  
</ bean> 
  
< bean id="ToyotaBean" class="com.techgene.ToyotaEngine"> 
    <property name="company" value="Toyota"> 
    </ property> 
  
    <property name="cost" value="300000.00"> 
    </ property> 
  
</ bean> 
  
< bean id="tyre2Bean" class="com.techgene.Tyres"> 
    <property name="name" value="TVS"> 
    </ property> 
  
    <property name="place" value="India"> 
    </ property> 
  
    <property name="message" value="Make in India"> 
    </ property> 
  
</ bean> 
  
< bean id="InjectwithSetter" class="com.techgene.Vehicle"> 
    <property name="engine" ref="ToyotaBean"> 
    </ property> 
  
    <property name="tyre" ref="tyre1Bean"> 
    </ property> 
  
</ bean> 
  
< bean id="InjectwithConstructor" class="com.techgene.Vehicle"> 
    <constructor - arg name="engine" ref="ToyotaBean"> 
    </ constructor - arg> 
  
    <constructor - arg name="tyre" ref="tyre2Bean"> 
    </ constructor - arg> 
      
</ bean> 
@Qualifier
used along with @Autowired annotation
When you need more control of the dependency injection process, @Qualifier can be used
This annotation is used to avoid confusion which occurs when you create more than one bean of the same type and want to wire only one of them with a property
@Qualifier("beanB2")
@Configuration
used on classes which define beans
Java class annotated with @Configuration is a configuration by itself and will have methods to instantiate and configure the dependencies
@Configuration annotation allows us to use annotations for dependency injection
@ComponentScan
to allow Spring to know the packages to scan for annotated components
to specify base packages using basePackageClasses or basePackage attributes to scan
 If specific packages are not defined, scanning will occur from the package of the class that declares this annotation.
@Bean
used at the method level
works with @Configuration to create Spring beans
@Configuration will have methods to instantiate and configure dependencies. Such methods will be annotated with @Bean
The method annotated with this annotation works as bean ID and it creates and returns the actual bean
Example:
@Configuration
public class AppConfig{
@Bean
public Person person(){
return new Person(address());
}
@Bean
public Address address(){
return new Address();    
}
}
@Lazy
used on component classes 
the bean will be created and initialized only when it is first requested for
You can also use this annotation on @Configuration classes. This indicates that all @Bean methods within that @Configurationshould be lazily initialized.
@Value
used at the field, constructor parameter, and method parameter level.
 indicates a default value expression for the field or parameter to initialize the property with. 
As the @Autowired annotation tells Spring to inject object into another when it loads your application context, you can also use @Value annotation to inject values from a property file into a bean’s attribute.
Spring Framework Stereotype Annotations
@Component
used on classes to indicate a Spring component.
marks the Java class as a bean or say component so that the component-scanning mechanism of Spring can add into the application context.
@Controller
used to indicate the class is a Spring controller
used to identify controllers for Spring MVC or Spring WebFlux
@Service
used on a class.
marks a Java class that performs some service, such as execute business logic, perform calculations and call external APIs
is a specialized form of the @Component annotation intended to be used in the service layer.
@Repository
used on Java classes which directly access the database
works as marker for any class that fulfills the role of repository or Data Access Object
has a automatic translation feature
For example, when an exception occurs in the @Repository there is a handler for that exception and there is no need to add a try catch block.
Spring Boot Annotations
@EnableAutoConfiguration
usually placed on the main application class
implicitly defines a base “search package”.
This annotation tells Spring Boot to start adding beans based on classpath settings, other beans, and various property settings.
*/