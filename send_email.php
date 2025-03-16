<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "rayyantaib@examploutlook.com";  // Replace with your email
    $subject = "New Contact Request from " . $name;
    $headers = "From: " . $email . "\r\n";
    
    $email_body = "You have received a new message from $name.\n\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Message:\n$message\n";

    if (mail($to, $subject, $email_body, $headers)) {
        echo "<script>alert('Message sent successfully!'); window.location.href='contact.html';</script>";
    } else {
        echo "<script>alert('Error sending message. Try again later.'); window.location.href='contact.html';</script>";
    }
}
?>
