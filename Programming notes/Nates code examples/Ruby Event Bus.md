
```ruby
class EventBus
  def initialize
    @listeners = {}
  end

  # Register a listener for a specific event type
  def subscribe(event_type, listener)
    @listeners[event_type] ||= []
    @listeners[event_type] << listener
  end

  # Remove a listener for a specific event type
  def unsubscribe(event_type, listener)
    return unless @listeners[event_type]
    @listeners[event_type].delete(listener)
  end

  # Publish an event to all subscribed listeners for that event type
  def publish(event_type, event)
    return unless @listeners[event_type]
    @listeners[event_type].each { |listener| listener.call(event) }
  end
end

# Usage
event_bus = EventBus.new

# Listener - this would be in a class.
listener = ->(event) { puts "Received event: #{event}" }

# Subscribe the listener to an event type.
event_bus.subscribe(:my_event, listener)

# Publish an event
event_bus.publish(:my_event, "Hello, EventBus!")

# Output: Received event: Hello, EventBus!



# You can use events (preferred and better)
module EventTypes
  MY_EVENT = :my_event
  EMAIL_SENT = :email_sent
  USER_REGISTERED = :user_registered
  EMAIL_SENT_SUCCESS= :email_sent_success
  ORDER_PLACED = :order_placed
  ERROR_OCCURRED = :error_occurred
end

# New Email Sent Event
email_sent_listener = ->(email) { puts "Email sent to: #{email[:to]} | data: #{email}" }
event_bus.subscribe(EventTypes::EMAIL_SENT, email_sent_listener)

# Simulate sending an email and publishing an Email Sent event
email_info = { to: 'user@example.com', subject: 'Welcome!', body: 'Hello and welcome!' }
puts '-' * 25
event_bus.publish(EventTypes::EMAIL_SENT, email_info)

# Output will include "Email sent to: user@example.com" after the existing "Hello, EventBus!"



# EXAMPLE USING A CLASS
class EmailService
  def initialize(event_bus)
    @event_bus = event_bus
    subscribe_to_events
  end

  private

  def subscribe_to_events
    @event_bus.subscribe(EventTypes::EMAIL_SENT, method(:handle_email_sent))
  end

  def handle_email_sent(email_info)
    # Here you would implement the logic to send the email
    puts "EmailService: Sending email to #{email_info[:to]}"
    # After sending the email, you can publish an event, e.g., email successfully sent or failed
    
    # For example, let's assume the email is sent successfully. This would then trigger something to the event bus that would handle function most likely in another class.
    @event_bus.publish(EventTypes::EMAIL_SENT_SUCCESS, email_info)
  end
end

# Usage
event_bus = EventBus.new

# Create an instance of EmailService and pass the event bus to it
email_service = EmailService.new(event_bus)

# Simulate sending an email - this would typically be done by another part of the application
email_info = { to: 'user@example.com', subject: 'Welcome!', body: 'Hello and welcome!' }
puts '-' * 25
event_bus.publish(EventTypes::EMAIL_SENT, email_info)
```

