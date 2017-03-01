class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      # Authlogic::ActsAsAuthentic::Email
      t.string :email

      # Authlogic::ActsAsAuthentic::Password
      t.string :crypted_password
      t.string :password_salt

      # Authlogic::ActsAsAuthentic::Password
      t.string :persistence_token
      t.index  :persistence_token, unique: true

      # Authlogic::ActsAsAuthentic::SingleAccessToken
      t.string :single_access_token
      t.index  :single_access_token, unique: true

      # Authlogic::ActsAsAuthentic::PerishableToken
      t.string :perishable_token
      t.index  :perishable_token, unique: true

      t.timestamps
    end
  end
end
