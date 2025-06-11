package com.Surya.ExploraApp.Model.GeneralServices;

import jakarta.persistence.*;

@Entity
@Table(name = "subscribed_mails")
public class SubscribedMailIds {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String MailId;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getMailId() {
        return MailId;
    }

    public void setMailId(String mailId) {
        MailId = mailId;
    }

    public SubscribedMailIds(String mailId) {
        MailId = mailId;
    }
}
